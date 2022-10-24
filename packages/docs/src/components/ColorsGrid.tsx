import { colors } from '@weich-ui/tokens'
import { getContrast } from 'polished'
import '../styles/colors-grid.css'

export function ColorsGrid() {
  return (
    <div className="colors-grid">
      {Object.entries(colors).map(([key, color]) => {
        return (
          <div
            key={key}
            style={{
              backgroundColor: color,
              padding: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'Roboto Mono, monospace',
                fontSize: '.875rem',
                color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
              }}
            >
              <strong className="select-all">${key}</strong>
              <span className="select-all">{color}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
