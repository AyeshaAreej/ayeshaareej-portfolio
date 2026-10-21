// Add posts here. Each post gets its own page at /blog/<slug>.
// image: file in public/blog/ (replace with your own any time)
// link: optional original LinkedIn/Medium post. Leave "" to hide the button.
// content blocks: h2, p, ul, ol (items), quote
const blogPosts = [
  {
    slug: "merge-step-keeps-automation-honest",
    title: "The merge step that keeps an automation honest",
    date: "",
    image: "/blog/automation-merge.svg",
    excerpt: "Enriching Airtable sales data with the RestCountries API in n8n, and why matching each record to its own API response is the part that decides whether you can trust the result.",
    tags: ["n8n", "Airtable", "API Integration"],
    link: "",
    content: [
      { type: "h2", text: "The goal" },
      { type: "p", text: "A customer table in Airtable had a country for every customer. The goal was to add region and subregion to each record automatically, so the team could segment customers by region without looking countries up by hand." },
      { type: "h2", text: "The workflow" },
      { type: "ol", items: [
        "A manual trigger starts the run.",
        "An Airtable node searches the customer records.",
        "In parallel, an HTTP request asks the RestCountries API for country data.",
        "A Merge node combines the two streams.",
        "Loop Over Items goes through the merged records one at a time.",
        "An Airtable node updates each record with its region and subregion."
      ] },
      { type: "h2", text: "Why the merge matters" },
      { type: "p", text: "The search and the API call run side by side, so their results arrive as two separate lists. The Merge node has to line every customer up with the right country. If that pairing goes wrong even once, a customer in Brazil quietly ends up with data for another country, and nobody notices until someone segments a campaign and the numbers look off." },
      { type: "h2", text: "Updating one record at a time" },
      { type: "p", text: "Looping and updating each record individually is slower than a bulk write. It also keeps every update tied to the record it came from, which is worth more than speed when the data feeds real decisions." },
      { type: "h2", text: "Result" },
      { type: "p", text: "Manual country lookups dropped by about 80%, and every customer record now carries its region and subregion." },
      { type: "quote", text: "Nobody puts a merge node in a demo, but it decides whether the automation can be trusted." }
    ],
  },
  {
    slug: "why-automations-need-error-monitoring",
    title: "Why your automation needs error monitoring",
    date: "",
    image: "/blog/automation-error-monitoring.svg",
    excerpt: "Automations fail quietly. How the sales reporting workflow flags a failed step the moment it happens instead of weeks later.",
    tags: ["n8n", "Error Handling", "Automation"],
    link: "",
    content: [
      { type: "h2", text: "Quiet failures" },
      { type: "p", text: "A workflow that crashes loudly gets fixed quickly. The dangerous failures are the quiet ones: an API times out, a field comes back empty, a webhook never fires. The workflow stops or finishes with wrong data, and nobody hears about it." },
      { type: "h2", text: "The sales reporting workflow" },
      { type: "p", text: "This automation pulls sales data from a data warehouse into Airtable, enriches it through external APIs, and delivers the report by Gmail and Discord. It runs without anyone touching it, which is exactly why a failure can go unnoticed." },
      { type: "h2", text: "What error monitoring adds" },
      { type: "ul", items: [
        "Failures are flagged in real time instead of being found later.",
        "A report that did not go out becomes a visible event, not an absence nobody notices."
      ] },
      { type: "h2", text: "Why it builds trust" },
      { type: "p", text: "Teams stop checking the output by hand once they know a failure will announce itself. That is the point where an automation starts saving time instead of adding a new thing to watch." },
      { type: "quote", text: "A green checkmark tells you it ran, not that it ran correctly." }
    ],
  },
  {
    slug: "why-voice-agents-fail-on-phone-calls",
    title: "Why voice agents fail on real phone calls",
    date: "",
    image: "/blog/voice-agents-phone-calls.svg",
    excerpt: "Phone audio reaches a voice agent with far less detail than a laptop microphone, and names and numbers suffer first. Test on real calls and read back anything exact.",
    tags: ["Voice AI", "Retell AI", "Twilio"],
    link: "",
    content: [
      { type: "h2", text: "Works on the laptop, fails on the phone" },
      { type: "p", text: "A voice agent can sound perfect in a demo and still fail on a real call. Phone audio usually arrives at 8kHz, which carries far less detail than a laptop microphone. Speech recognition gets worse, and names and numbers get worse first." },
      { type: "p", text: "Fifteen and fifty sound almost identical at that quality, and so do many names. The agent still replies in a confident, human voice, so the mistake is easy to miss." },
      { type: "h2", text: "What helps" },
      { type: "ul", items: [
        "Test over real phone calls, from a cheap handset, in a noisy room.",
        "Have the agent read back anything exact, such as a name, a date or an email address, before it acts.",
        "Log what the agent heard next to what it did, so a wrong booking can be traced."
      ] },
      { type: "h2", text: "Where it shows up" },
      { type: "p", text: "In a booking flow built with Retell AI, Twilio, n8n and Google Calendar, one misheard date means a wrong appointment. A read-back step is cheap insurance against that." },
      { type: "quote", text: "A voice agent is only as accurate as the words it thinks it heard." }
    ],
  },
];

export const readTime = (post) => {
  const words = post.content.map((b) => (b.text || (b.items || []).join(" "))).join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200)) + " min read";
};

export default blogPosts;
