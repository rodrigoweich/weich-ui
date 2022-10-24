import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td style={{ userSelect: 'all' }}>${key}</td>
              <td style={{ userSelect: 'all' }}>
                <code>{value}</code>
              </td>
              {hasRemValue && (
                <td style={{ userSelect: 'all' }}>
                  {value.includes('rem') ? (
                    <code>{Number(value.replace('rem', '')) * 16 + 'px'}</code>
                  ) : (
                    '--:--'
                  )}
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
