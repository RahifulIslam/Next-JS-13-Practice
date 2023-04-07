import Link from "next/link";

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <Link href='/'> Logos Here</Link>
            </div>
            <div className="links">
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Team</Link>
                <Link href='/code/repos'>Repos</Link>
            </div>
        </div>
    </header>
  )
}

export default Header