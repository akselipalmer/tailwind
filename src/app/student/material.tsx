export default function Material() {
  return (
    <div className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Homework
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            {`Remember to practice each of the sentences on page 8. And don't forget. You're amazing! 🌟`}
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-6 sm:mt-10  sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <div className="flex max-w-xl flex-col items-start justify-between">
              <iframe
                loading="lazy"
                className="w-full h-full"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGExucJZbA&#x2F;BSU71xGQIhyzMCjfFYnSgA&#x2F;view?embed"
                allowFullScreen={true}
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="p-3">
              <p className="text-base text-gray-800 font-bold">
                Pink Illustration English Class Presentation
              </p>
            </div>
          </div>
          <div>
            <div className="flex max-w-xl flex-col items-start justify-between">
              <iframe
                loading="lazy"
                className="w-full h-full"
                src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGEx84Sjnc&#x2F;lzQuYjtahgck-eYgb5QD-A&#x2F;view?embed"
                allowFullScreen={true}
                allow="fullscreen"
              ></iframe>
            </div>
            <div className="p-3">
              <p className="text-base text-gray-800 font-extrabold">
                White Playful Illustration English Class Presentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
