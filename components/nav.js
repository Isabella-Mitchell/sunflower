export default function Nav() {
  return (
    <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/">
          Home
        </a>
      </li>
      <li class="mr-6">
        <a
          class="text-blue-500 hover:text-blue-800"
          href="/topics/accomodation"
        >
          Accomodation
        </a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="/topics/venue">
          Venue
        </a>
      </li>
    </ul>
  );
}
