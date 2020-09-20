import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello! 👋</h1>
    <p>This is the home page</p>
    <p>
      <Link href="/ads">
        <a>Go to Ads List</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
