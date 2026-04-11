export default function ProgressBar({ bgcolor, progress, height }) {

  const ParentDiv = {
    height: height,
    width: '100%',
    backgroundColor: '#97979',
  }
  const ChildDiv = {
    height: '1px',
    width: `${progress}%`,
    backgroundColor: bgcolor,
  }

  return (
    <div style={ParentDiv}>
      <div style={ChildDiv}>
      </div>
    </div>
  )
}
