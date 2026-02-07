import Link from "next/link";
import { FOUR_STORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FourStories() {
  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <SectionHeader
          badge="The Trust Problem"
          title="Every Business Runs on Trust. That Trust Is Broken."
          align="center"
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {FOUR_STORIES.map((story) => (
            <div
              key={story.title}
              className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 hover:border-certifyd-blue/30 hover:shadow-lg transition-all"
            >
              <h3 className="font-heading text-lg font-semibold text-text-on-light mb-3">
                {story.title}
              </h3>
              <p className="text-text-on-light-muted text-sm leading-relaxed mb-4">
                {story.story}
              </p>
              <p className="text-sm font-semibold text-accent-warning mb-4">
                {story.stat}
              </p>
              <Link
                href={story.href}
                className="text-certifyd-blue text-sm font-medium hover:underline"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center italic text-text-on-light-muted mt-12 max-w-2xl mx-auto">
          &ldquo;Different industries. Same problem. You don&apos;t know who
          you&apos;re actually dealing with.&rdquo;
        </p>
      </div>
    </section>
  );
}
