import EventBus from './event-bus'

export enum WebSocketEvents {
	Connected = 'connected',
	Error = 'error',
	Message = 'message',
	Close = 'close',
}

export class WSTransport extends EventBus {
	private socket: WebSocket | null = null
	private pingInterval: number | NodeJS.Timeout = 0

	constructor (private readonly url: string) {
		super()
	}

	public send (data: unknown): void {
		if (!this.socket) {
			throw new Error('Socket is not connected')
		}

		this.socket.send(JSON.stringify(data))
	}

	public async connect (): Promise<void> {
		if (this.socket) {
			throw new Error('The socket is already connected!')
		}

		this.socket = new WebSocket(this.url)
		this.subscribe(this.socket)
		this.setupPing()

		await new Promise<void>((resolve, reject) => {
			this.on(WebSocketEvents.Error, reject);
			this.on(WebSocketEvents.Connected, () => {
				this.off(WebSocketEvents.Error, reject);
				resolve()
			})
		})
	}

	public close (): void {
		this.socket?.close()
	}

	private setupPing (): void {
		this.pingInterval = setInterval(() => {
			this.send({ type: 'ping' })
		}, 5000)

		this.on(WebSocketEvents.Close, () => {
			clearInterval(this.pingInterval)

			this.pingInterval = 0
		})
	}

	private subscribe (socket: WebSocket): void {
		socket.addEventListener('open', () => {
			this.emit(WebSocketEvents.Connected)
		})
		socket.addEventListener('close', () => {
			this.emit(WebSocketEvents.Close)
		})

		socket.addEventListener('error', (e) => {
			this.emit(WebSocketEvents.Error, e)
		})

		socket.addEventListener('message', (message) => {
			try {
				const data = JSON.parse(message.data)
				if (data.type && data.type === 'pong') {
					return
				}
				this.emit(WebSocketEvents.Message, data)
			} catch (error) {
				// ignore
			}
		})
	}
}
