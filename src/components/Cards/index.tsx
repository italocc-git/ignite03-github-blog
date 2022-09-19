export function Cards() {
    return(
        <div className="w-[416px] height-[260x] border-2 border-base-label border-hidden bg-base-post rounded-[10px] hover:border-solid">
            <div className="px-8 py-8 flex flex-col gap-5">
                <div className="flex items-center justify-between font-nunito">
                    <span className=" font-bold text-xl text-base-title">
                        JavaScript data types and data structures
                    </span>
                    <span className="text-sm text-base-span">
                        Há 1 dia
                    </span>
                </div>

                <div>
                    <span className="text-base-text text-base font-normal font-nunito">
                        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                        Dynamic typing
                        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

                        let foo = 42; // foo is now a number
                        foo = 'bar'; // foo is now a string
                        foo = true; // foo is now a boolean 
                    </span>
                </div>

            </div>
        </div>
    )
}