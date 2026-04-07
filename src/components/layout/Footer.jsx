import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brandBlue/10 bg-[#f5f7fb]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-brandGray/75 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>&copy; {year} KenTar-Builders & Engineering Services. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/terms" className="font-semibold text-brandBlue transition hover:text-brandGreen">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
