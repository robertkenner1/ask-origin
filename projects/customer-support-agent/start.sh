#!/bin/bash

# Customer Support Agent Startup Script
# Always uses the Node.js frontend (primary UI)

echo "======================================================================="
echo "🚀 Customer Support AI Agent"
echo "======================================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "server.js" ]; then
    echo "❌ Error: Please run this script from the customer-support-agent directory"
    exit 1
fi

# Check Node.js dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Node.js dependencies..."
    npm install
fi

# Check Python dependencies
if ! python3 -c "import anthropic" 2>/dev/null; then
    echo "📦 Installing Python dependencies..."
    pip install -r requirements.txt
fi

echo ""
echo "Starting services..."
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Shutting down services..."
    pkill -f "node server.js"
    pkill -f "http-server public"
    exit 0
}

trap cleanup SIGINT SIGTERM

# Start Node.js backend
echo "✓ Starting backend server (Node.js + Python agent)..."
node server.js &
BACKEND_PID=$!

# Wait for backend to be ready
sleep 3

# Build and start frontend
echo "✓ Building project..."
cd ../..
make build > /dev/null 2>&1

echo "✓ Starting frontend server..."
make start > /dev/null 2>&1 &
FRONTEND_PID=$!

sleep 2

echo ""
echo "======================================================================="
echo "✅ Customer Support Agent is running!"
echo "======================================================================="
echo ""
echo "🌐 Frontend: http://localhost:8181/customer-support-agent/"
echo "🔧 Backend:  http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop all services"
echo "======================================================================="
echo ""

# Wait for processes
wait
