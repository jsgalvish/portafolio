import React from 'react';
import './header.css'
class Header extends React.Component{
  render() {
    return(
      <div className="header">
        <div className="content">
          <h2>jsgalvish.tech</h2>
          <div className="right">
            <a href="https://www.linkedin.com/in/js-galvis-h/" target="_blank" rel="noopener noreferrer">
              <img alt="linkedin" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkxpbmtlZEluIiByb2xlPSJpbWciCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpmaWxsPSIjZmZmIj48cmVjdAp3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIKcng9IjE1JSIKZmlsbD0iIzAwNzdiNSIvPjxjaXJjbGUgY3g9IjE0MiIgY3k9IjEzOCIgcj0iMzciLz48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNjYiIGQ9Ik0yNDQgMTk0djE5OE0xNDIgMTk0djE5OCIvPjxwYXRoIGQ9Ik0yNzYgMjgyYzAtMjAgMTMtNDAgMzYtNDAgMjQgMCAzMyAxOCAzMyA0NXYxMDVoNjZWMjc5YzAtNjEtMzItODktNzYtODktMzQgMC01MSAxOS01OSAzMiIvPjwvc3ZnPg==" />
            </a>
            <a href="mailto:juansgalvish@gmail.com">
              <img alt="gmail" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IkdtYWlsIiByb2xlPSJpbWciCnZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cmVjdAp3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIKcng9IjE1JSIKZmlsbD0iI2ZmZiIvPjxyZWN0IHdpZHRoPSIzNjIiIGhlaWdodD0iMjcyIiB4PSI3NSIgeT0iMTIwIiBmaWxsPSIjZjJmMmYyIiByeD0iOCUiLz48cGF0aCBmaWxsPSIjZDU0YzNmIiBkPSJNMTIwIDM5Mkg5N2MtMTIgMC0yMi0xMC0yMi0yM1YxNDNoNDV6Ii8+PHBhdGggZmlsbD0iI2I2MzUyNCIgZD0iTTM5MiAzOTJoMjNjMTIgMCAyMi0xMCAyMi0yM1YxNDNoLTQ1eiIvPjxwYXRoIGZpbGwtb3BhY2l0eT0iLjA1IiBkPSJNMjU2IDI4NkwxMjAgMzkyVjE4N3oiLz48cGF0aCBmaWxsLW9wYWNpdHk9Ii4wOCIgZD0iTTgyIDE1OWwyMzUgMjMzaDc1VjE1OXoiLz48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RlNTE0NSIgc3Ryb2tlLXdpZHRoPSI0NSIgZD0iTTk3IDE0M2wxNTkgMTE1IDE1OS0xMTUiLz48cGF0aCBmaWxsPSIjZjJmMmYyIiBkPSJNNDE1IDEyMGMtNSAwLTEwIDItMTMgNEwyNTYgMjMwIDExMCAxMjRjLTMtMi04LTQtMTMtNHoiLz48L3N2Zz4=" />
            </a>
            <a href="https://wa.me/573187958397">
              <img alt="whatsapp" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCmFyaWEtbGFiZWw9IldoYXRzQXBwIiByb2xlPSJpbWciCnZpZXdCb3g9IjAgMCA1MTIgNTEyIgpmaWxsPSIjZmZmIj48cmVjdAp3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIKcng9IjE1JSIKZmlsbD0iIzQ1ZDM1NCIvPjxwYXRoIGQ9Ik0zMDggMjczYy0zLTItNi0zLTkgMWwtMTIgMTZjLTMgMi01IDMtOSAxLTE1LTgtMzYtMTctNTQtNDctMS00IDEtNiAzLThsOS0xNGMyLTIgMS00IDAtNmwtMTItMjljLTMtOC02LTctOS03aC04Yy0yIDAtNiAxLTEwIDUtMjIgMjItMTMgNTMgMyA3MyAzIDQgMjMgNDAgNjYgNTkgMzIgMTQgMzkgMTIgNDggMTAgMTEtMSAyMi0xMCAyNy0xOSAxLTMgNi0xNiAyLTE4Ii8+PHBhdGggZD0iTTI2NCAzODRjLTQxIDAtNzItMjItNzItMjJsLTQ5IDEzIDEyLTQ4cy0yMC0zMS0yMC03MGMwLTcyIDU5LTEzMiAxMzItMTMyIDY4IDAgMTI2IDUzIDEyNiAxMjcgMCA3Mi01OCAxMzEtMTI5IDEzMm0tMTU5IDI5bDgzLTIzYTE1OCAxNTggMCAwIDAgMjMwLTE0MGMwLTg2LTY4LTE1NS0xNTQtMTU1YTE1OCAxNTggMCAwIDAtMTM3IDIzNiIvPjwvc3ZnPg==" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
