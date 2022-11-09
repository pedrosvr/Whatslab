export const initialMessages = [
    {
        id: `Fulano-${Math.ceil(Math.random() * 100000)}`,
        sender: "Fulano",
        content: "Hello",
        createdAt: new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
            ) // cria uma data no tempo atual
    },
    {
        id: `Me-${Math.ceil(Math.random() * 100000)}`,
        sender: "Me",
        content: "Hi",
        createdAt: new Date()
            .toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
            ) // cria uma data no tempo atual
    }
]