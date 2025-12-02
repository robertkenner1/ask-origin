# Streaming API Documentation

## Overview

The Streaming API provides a robust client-server architecture for streaming AI model outputs with
real-time updates, progress tracking, and comprehensive error handling.

### Key Components

1. **StreamingClient**: Main client for streaming operations that extends the base ApiClient
2. **Event System**: Typed events with a publisher-subscriber pattern
3. **Error Handling**: Enhanced error handling with classification, recovery actions, and fallbacks
4. **Server Integration**: Server-side utilities for creating streaming responses
5. **React Hooks**: Ready-to-use hooks for consuming streams in React components

## Getting Started

```typescript
// Import the singleton streamingClient (recommended)
import { streamingClient } from '@/services/api/streaming';

// Start a streaming operation using the singleton
const operation = streamingClient.streamChat({
  messages: [...]
});

// Alternatively, create a custom client instance
import { StreamingClient } from '@/services/api/streaming';

// Create a client with custom configuration
const customClient = new StreamingClient(
  { enableLogging: true },
  {
    detailedProgress: true,
    processContent: true,
    errorHandling: {
      useFallbacks: true,
      detailedErrors: true,
    },
  }
);

// Start a streaming operation with custom client
const customOperation = customClient.streamChat({
  messages: [...]
});

// Listen to events
operation.events.on('content', (event) => {
  console.log('New content:', event.content);
});

operation.events.on('progress', (event) => {
  console.log(`Progress: ${event.percentage}% - ${event.message}`);
});

operation.events.on('error', (event) => {
  console.error(`Error: ${event.message}`);

  if (event.recoverable) {
    console.log(`Recovery action: ${event.recovery.action}`);
  }
});

// Control the stream
operation.controller.pause();
operation.controller.resume();
operation.controller.cancel();

// Get the final result
const result = await operation.result;
```

## Error Handling

The streaming system provides detailed error handling capabilities:

1. **Error Classification**: Errors are classified by type and severity
2. **Recovery Actions**: Each error type has associated recovery actions
3. **Automatic Retry**: Network and timeout errors can be automatically retried
4. **Fallback Strategies**: Multiple fallback strategies for different error types
5. **Connection Status**: Real-time connection status monitoring

## Using React Hooks

```typescript
import { useStreamingChat } from '@/hooks/useStreamingChat';

function ChatComponent() {
  const {
    sendStreamingMessage,
    cancelStreaming,
    pauseStreaming,
    resumeStreaming,
    retryAfterError,
    isStreaming,
    content,
    thinking,
    progress,
    error,
    connectionStatus,
  } = useStreamingChat();

  // Send a message
  const handleSend = async () => {
    await sendStreamingMessage({
      messages: [{ type: 'user', content: inputText, id: Date.now().toString(), timestamp: new Date() }]
    });
  };

  // Retry after error
  const handleRetry = () => {
    if (error?.recoverable) {
      retryAfterError();
    }
  };

  return (
    <div>
      {/* UI components */}
    </div>
  );
}
```
