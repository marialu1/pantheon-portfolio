export default function TestSimplePage() {
  return (
    <div style={{
      padding: '50px',
      textAlign: 'center',
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>✅ TEST PAGE</h1>
      <p style={{ fontSize: '24px' }}>If you can see this, the server is working!</p>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>Current time: {new Date().toISOString()}</p>
    </div>
  )
}
