export default function MealsSlugPage({ params }) {
  return (
    <main>
      <h1>Meals Slug Page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
