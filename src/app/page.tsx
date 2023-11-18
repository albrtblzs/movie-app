import Section from './components/section'

const content = {
  title: 'Movie application',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Section title={content.title}>
        <div>Content</div>
      </Section>
    </main>
  )
}
