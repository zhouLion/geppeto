import { useStorage } from '@vueuse/core'

export function useSettings() {
    const maxTokens = useStorage<string>('chat-fedml-model-max-tokens', '1024')
    const modelUsed = useStorage<string>('chat-fedml-model', 'gpt-3.5-turbo')
    const instanceApiKey = useState<string | null>('chat-fedml-instance-api-key', () => null)
    const apiKey = useStorage<string>('chat-fedml-api-key', null)
    const isPasswordRequired = useState<boolean>('chat-fedml-is-password-required', () => false)

    return {
        maxTokens,
        modelUsed,
        apiKey,
        instanceApiKey,
        isPasswordRequired,
    }
}
