import HoverVideo from "@/components/vimeo";

export default function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <HoverVideo key={index} videoId={946821430} />
            ))}
          </div>
        </main>
      </div> */}
      <div className="grid-container">
        <div className="grid-wrapper">
          <div className="grid-wrapper-item medium">
            <HoverVideo videoId={"bTqVqk7FSmY"} provider="youtube" />
          </div>
          <div className="grid-wrapper-item large">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/puffins.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item tall">
            <HoverVideo videoId={"wOjGDgxAdro"} provider="youtube" />
          </div>
          <div className="grid-wrapper-item small grid-wrapper-item-centered">
            <p className="info">
              <span>
                Grid Overflow is a CSS library for respon­sive gallery
                thumb­nails layout. It has optional 3D hover effect, utility
                classes. Adj­ust­able by CSS variables.
              </span>
            </p>
          </div>
          <div className="grid-wrapper-item large">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/sorvagsvatn-lake.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item small">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/faroe-islands-map.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item small">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/klaksvik-sheeps.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item large">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/mykines-lighthouse.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item medium">
            <HoverVideo videoId={76979871} provider="vimeo" />
          </div>
          <div className="grid-wrapper-item tall">
            <HoverVideo videoId={"wOjGDgxAdro"} provider="youtube" />
          </div>
          <div className="grid-wrapper-item medium">
            <HoverVideo videoId={"bTqVqk7FSmY"} provider="youtube" />
          </div>
          <div className="grid-wrapper-item small">
            <img
              src="https://roman-flossler.github.io/StoryShowGallery/photos/Seljalandsfoss.jpg"
              alt=""
            />
          </div>
          <div className="grid-wrapper-item medium">
            <HoverVideo videoId={76979871} provider="vimeo" />
          </div>
        </div>
      </div>
    </>
  );
}
