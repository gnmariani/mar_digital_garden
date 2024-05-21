import { groq } from "next-sanity";

const PEOPLE_QUERY = groq`*[_type == "person" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;
