interface IModalMessage {
    statusIcon: 'check' | 'x'
    text: string
    textButton: string
    setEmailSend: React.Dispatch<React.SetStateAction<boolean>>
}

export type {
    IModalMessage
}