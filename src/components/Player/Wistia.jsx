import React, { useEffect } from 'react'

const Wistia = ({ handle, hashedId, ...embedOptions }) => {
  window._wq = window._wq || []
  window._wq.push({
    id: hashedId,
    options: embedOptions,
    onHasData: video => {
      handle = video
    },
  })
  useEffect(() => {
    if (!document.getElementById('wistia_script')) {
      var wistiaScript = document.createElement('script')
      wistiaScript.id = 'wistia_script'
      wistiaScript.type = 'text/javascript'
      wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js'
      wistiaScript.async = true
      document.body.appendChild(wistiaScript)
    }
    return () => handle && handle.remove()
  }, [handle])

  return (
    <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <div
        className="wistia_responsive_wrapper"
        style={{
          height: '100%',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '100%',
        }}
      >
        <div
          className={`wistia_embed wistia_async_${hashedId} videoFoam=true`}
          style={{ height: '100%', width: '100%' }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  )
}

export default Wistia
