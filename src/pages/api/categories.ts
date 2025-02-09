import members from '../../data/categories.json';

export function GET() {
  return new Response(JSON.stringify(members), {
    headers: { 'Content-Type': 'application/json' },
  });
}
