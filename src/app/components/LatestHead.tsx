export default function LatestHead () {
    return (
        <div>
            <div className="pb-16 md:flex md:flex-row md:justify-between flex flex-col gap-5 ">
              <div className="md:flex md:flex-row align-middle gap-2 ">
                  <h1 className="text-3xl font-bold">Latest News</h1>
                  <div className="hidden mt-4 md:mt-0 md:block w-px  h-12 bg-gray-300"></div>
                  <div className="text-gray-500 flex flex-col font-sans text-lg">
                      <p >Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam.</p>  
                      <p>Risus tellus eget ultrices pretium nisi amet facilisis.</p>
                  </div>
              </div>
            </div>
        </div>
    )
}