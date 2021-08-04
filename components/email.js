import { isTargetLikeServerless } from "next/dist/next-server/server/config"

export default function Email() {
    handleClick = () => {
    
    }
    return(
        <div className="grid grid-cols-1 gap-6">
        <form >
                <div >
                    <label className="block">
                        <span>Name</span>
                        <input type='text' className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-purple focus:ring focus:ring-blue focus:ring-opacity-50"  />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span>Email</span>
                    <input type='text' className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-purple focus:ring focus:ring-blue focus:ring-opacity-50" />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span>Message</span>
                    <textarea className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-purple focus:ring focus:ring-blue focus:ring-opacity-50"></textarea>
                    </label>
                </div>
                    <ul class={{actions}}>
                        <li><input type={{submit}} value={{SendMessage}} class={{primary}} /></li>
                        <li><input type={{reset}} value={{Reset}} /></li>
                    </ul>
        </form>
        </div>
    )
}
//method={{post}} action={{email}}