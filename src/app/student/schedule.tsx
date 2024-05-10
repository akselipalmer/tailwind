const schedules = [
  { id: 1, name: "10:00 AM - 10/05/24", value: "10:00 AM" },
  { id: 2, name: "10:00 AM - 17/05/24", value: "Next Friday" },
  { id: 3, name: "10:00 AM - 24/05/24", value: "May 24th" },
];

export default function Schedule() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="bg-white pb-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Schedule
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {schedules.map((scheduled) => (
            <div
              key={scheduled.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">
                {scheduled.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                {scheduled.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
