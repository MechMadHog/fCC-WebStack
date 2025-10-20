# 🧩 Forum Leaderboard

- **Live data fetch with async/await**  
  Pulled `latest.json` from the FCC forum using `fetch()` then `await res.json()`. Wrapped in `try...catch` for graceful errors.

- **Destructuring nested JSON**  
  Extracted `topic_list.topics` and `users`. Picked only the fields I needed: `id`, `title`, `views`, `posts_count`, `slug`, `posters`, `category_id`, `bumped_at`.

- **Category mapping with sensible defaults**  
  Built an `allCategories` lookup that returns a readable name and a CSS class. If the ID is unknown, fall back to a General category and class. Composed the category link with `${forumCategoryUrl}${className}/${id}`.

- **Avatar templating from Discourse**  
  Parsed `users` to match `posters.user_id`, replaced `{size}` in `avatar_template`, and handled absolute vs relative URLs by prefixing the CDN base when needed.

- **Reusable formatting helpers**  
  - `timeAgo(time)` converts timestamps into `Xm ago`, `Xh ago`, or `Xd ago`  
  - `viewCount(views)` shortens large numbers to `Xk`  
  - `forumCategory(id)` returns a ready-to-render anchor with category text and class  
  - `avatars(posters, users)` returns a joined string of `<img>` tags

- **Functional rendering pattern**  
  Used `.map(...).join("")` to convert topic data into table rows. Kept the template literal readable and focused on data first, markup second.

- **Small, single-purpose functions**  
  Split concerns clearly: data fetch, mapping, formatting, rendering. This keeps the file easy to extend, test, and maintain.

---

## Key snippets I applied

- **Relative time without external libs**  
  Calculated minutes, hours, days using simple math on `Date` objects.

- **Readable numbers for UI**  
  Rounded thousands with `Math.floor(views / 1000)` then appended `k` for quick scanning.

- **Defensive coding**  
  Checked for missing users or unknown categories. Returned safe defaults so the UI never breaks.

---

## Notes

- Topics show **replies** as `posts_count - 1` which is the usual forum convention.  
- Category classes (`career`, `feedback`, `support`, `javascript`, `html-css`, `python`, `motivation`, `backend`, `general`) enable category color-coding in CSS.  
- All links open in a new tab via `target="_blank"` which is friendlier for browsing.
