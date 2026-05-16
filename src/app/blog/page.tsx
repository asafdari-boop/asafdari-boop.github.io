import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

/** Slugs shown only under Meetup Notes (not in the main list). */
const MEETUP_NOTE_SLUGS = new Set([
  "computer-use-agents",
  "authorized-consumer-agents-stanford",
  "ai-agent-congress-1",
  "llama-lounge-8",
]);

type BlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number];

function sortByPublishedDesc(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    if (
      new Date(String(a.metadata.publishedAt)) >
      new Date(String(b.metadata.publishedAt))
    ) {
      return -1;
    }
    return 1;
  });
}

function PostRow({
  post,
  delayIndex,
}: {
  post: BlogPost;
  delayIndex: number;
}) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 2 + delayIndex * 0.05}>
      <Link
        className="flex flex-col space-y-1 mb-4"
        href={`/blog/${post.slug}`}
      >
        <div className="w-full flex flex-col">
          <p className="tracking-tight">{post.metadata.title}</p>
          <p className="h-6 text-xs text-muted-foreground">
            {post.metadata.publishedAt}
          </p>
        </div>
      </Link>
    </BlurFade>
  );
}

export default async function BlogPage() {
  const posts = sortByPublishedDesc(await getBlogPosts());
  const mainPosts = posts.filter((p) => !MEETUP_NOTE_SLUGS.has(p.slug));
  const meetupPosts = posts.filter((p) => MEETUP_NOTE_SLUGS.has(p.slug));

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {mainPosts.map((post, id) => (
        <PostRow key={post.slug} post={post} delayIndex={id} />
      ))}

      {meetupPosts.length > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + mainPosts.length * 0.05}>
          <details className="group mt-10">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="relative pt-3">
                <div className="absolute left-0 top-0 h-4 w-32 rounded-t-md border border-b-0 border-border bg-background" />
                <div className="relative flex min-h-16 items-center gap-3 rounded-md rounded-tl-none border border-border bg-background px-5 py-4 shadow-sm transition-colors group-open:bg-muted/20">
                  <span className="text-muted-foreground transition-transform group-open:rotate-90">
                    ▸
                  </span>
                  <span className="font-medium tracking-tight">
                    Meetup Notes
                  </span>
                </div>
              </div>
            </summary>
            <div className="mt-4 pl-5 border-l border-border ml-1 space-y-0">
              {meetupPosts.map((post, id) => (
                <PostRow key={post.slug} post={post} delayIndex={id} />
              ))}
            </div>
          </details>
        </BlurFade>
      ) : null}
    </section>
  );
}
