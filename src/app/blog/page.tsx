'use client';
import Link from 'next/link';
import NavigationComponent from '@/components/Navigation';

const articles = [
  {
    title: 'What to Do Before Launching Your Website',
    summary: 'A step-by-step checklist to ensure your website launch goes smoothly, from domain setup to final testing.',
    slug: 'before-launching-your-website',
  },
  {
    title: 'Avoid These 5 Common Tech Mistakes',
    summary: 'Learn the most frequent pitfalls small business owners make with their tech—and how to avoid them.',
    slug: 'common-tech-mistakes',
  },
  {
    title: 'Remote Support: What It Actually Looks Like',
    summary: 'Curious about remote IT support? Here\'s what to expect, how it works, and why it\'s often the fastest solution.',
    slug: 'remote-support-explained',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f2f4f6]">
      <NavigationComponent scrollToSection={() => {}} />
      <section className="section-spacing">
        <div className="section-content max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-[#1c398e]">Blog & Knowledge Hub</h1>
          <p className="text-lg text-gray-700 mb-12 text-center">Actionable tips, checklists, and insights for solopreneurs and small business owners. No fluff—just real advice you can use.</p>
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <div key={article.slug} className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-[#dbe9fd]">
                <div>
                  <h2 className="text-2xl font-semibold text-[#1c398e] mb-2">{article.title}</h2>
                  <p className="text-gray-700 mb-4">{article.summary}</p>
                </div>
                <Link href="#" className="text-[#1c398e] font-semibold hover:underline focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-max" aria-label={`Read more: ${article.title}`}>
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 