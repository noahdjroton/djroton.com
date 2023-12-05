import { Separator } from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="mx-auto  container">
            <div className="max-w-screen-xl space-y-6 py-16">
                <Separator className="bg-black dark:bg-white" />
                <p className="text-sm">
                    {
                        "Built with Next.js, Shadcn UI and Tailwind CSS, deployed with Vercel."
                    }
                </p>
                <p className="text-xs">
                    &copy; {new Date().getFullYear()}. Djroton.
                </p>
            </div>
        </footer>
    );
}
