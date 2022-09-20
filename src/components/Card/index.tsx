export function Card() {
    return(
        <div className="w-[416px] h-[260px] border-2 px-8 py-8  border-base-label border-transparent bg-base-post rounded-[10px] hover:border-base-border overflow-y-hidden cursor-pointer mb-8">
            <div className="flex flex-col gap-4 ">
                <div className="flex items-base justify-between gap-x-4 font-nunito">
                    <span className=" font-bold text-xl text-base-title">
                        JavaScript data types and data structures
                    </span>
                    <span className="text-sm text-base-span min-w-[53px]">
                        Há 1 dia
                    </span>
                </div>

                <div >
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