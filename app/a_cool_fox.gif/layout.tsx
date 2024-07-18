export default function Layout({ children }) {
    return (
        <html>
            <video width="400" height="400" controls preload="none">
            <source src="/fox.mp4" type="video/mp4" />
            {/* <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            /> */}
            Your browser does not support the video tag.
            </video>
        </html>
    )
  }