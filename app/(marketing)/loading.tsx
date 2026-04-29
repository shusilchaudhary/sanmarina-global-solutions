export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-950">
      <div className="flex flex-col items-center gap-4">
        <div
          style={{
            width: '40px',
            height: '40px',
            border: '3px solid #27272a',
            borderTopColor: '#8B5CF6',
            borderRadius: '50%',
            animation: 'spin 0.7s linear infinite',
          }}
        />
        <p style={{ color: '#71717a', fontSize: '14px', fontWeight: 500 }}>Loading...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </main>
  );
}
