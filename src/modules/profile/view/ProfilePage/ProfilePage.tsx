import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/shadcn-components/ui/dialog.tsx'
import { Input } from '@/lib/shadcn-components/ui/input.tsx'
import { Settings } from 'lucide-react'
import { profilePlaceholder } from '@/static/images.ts'
import { useEffect, useState } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { User } from '@/model/user.ts'

export const ProfilePage = (id:string) => {
  const [user, setUser] = useState<User>();
  const [firstname, setFirstName] = useState(user?.FIRST_NAME || '');
  const [lastname, setLastName] = useState(user?.LAST_NAME || '');
  const [username, setUsername] = useState(user?.USERNAME || '');
  const [isEditing, setIsEditing] = useState(false);
  console.log(id)
  const handleSave = async () => {
    try {
      const updatedUserData = {
        FIRST_NAME: '',
        LAST_NAME: '',
        USERNAME: '',
      };

      // Update the user data in the 'USER' table
      const { data, error } = await supabase
        .from('USER')
        .update(updatedUserData)
        .eq('id', id);

      if (error) {
        console.error('Error updating user data:', error);
        // Handle error, show toast, etc.
      } else {
        console.log('User data updated successfully:', data);
        // Handle success, show toast, etc.
      }
    } catch (error) {
      console.error('Error during save:', error);
      // Handle error, show toast, etc.
    } finally {
      // After saving, set isEditing to false
      setIsEditing(false);
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase
          .from('USER')
          .select('*')
          .eq('id', id);

        if (error) {
          console.error('Error getting user data:', error);
        } else {
          setUser(data?.[0] || null); // Set user data to state
          setFirstName(data?.[0]?.FIRST_NAME || '');
          setLastName(data?.[0]?.LAST_NAME || '');
          setUsername(data?.[0]?.USERNAME || '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUser();
  }, [supabase, id]);


  return (
    <div className={'w-full'}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center bg-black text-white bg-contain transform translate-x-2.5 translate-y-12"
            onClick={() => setIsEditing(true)}
          >
            <Settings className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-zinc-950 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 ">
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">First Name</p>
              {isEditing ? (
                <Input id="name" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="col-span-3" />
              ) : (
                <span className="text-xl font-semibold text-white">{user?.FIRST_NAME}</span>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Last Name</p>
              {isEditing ? (
                <Input id="name" value={lastname} onChange={(e) => setLastName(e.target.value)} className="col-span-3" />
              ) : (
                <span className="text-xl font-semibold text-white">{user?.LAST_NAME}</span>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-white">Username</p>
              {isEditing ? (
                <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="col-span-3" />
              ) : (
                <span className="text-xl font-semibold text-white">{user?.USERNAME}</span>
              )}
            </div>
          </div>
          {isEditing && (
            <DialogFooter>
              <Button type="submit" onClick={handleSave}>
                Save
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      <div className="w-full h-32 bg-white flex items-end rounded-md" />
      <div className={'flex gap-3 px-5'}>
        <img
          className="w-20 h-20 rounded-full relative top-[-30px] bg-zinc-950"
          src={profilePlaceholder}
          alt="user profile picture"
        />
        <div className="text-sm text-gray-500 flex flex-col">
          <span className="text-xl font-semibold text-white">{user?.FIRST_NAME} {user?.LAST_NAME}</span>
          <span className="text-sm text-muted-foreground">@{user?.USERNAME}</span>
        </div>
      </div>
    </div>
  )
}
