import React, { useState, useEffect } from 'react';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/react/solid';
import useAuthStore from '../../store/AuthStore';
function CheckedCard() {
  let fakeApi = {
    Checked: false,
  };
  const [Checked, setChecked] = useState(false);
  const { user } = useAuthStore()
  console.log(user)
  let key = window.localStorage.getItem("key")
  useEffect(() => {
    setChecked(fakeApi.Checked);
  }, [fakeApi.Checked]);

  const handleChecked = () => {
    if (Checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <>
      <div className="flex items-center gap-1">
        {Checked ? (
          <CheckCircleIconSolid
            className="h-7 w-7 text-teal-700 cursor-pointer"
            onClick={key ? handleChecked : () => { }}
          />
        ) : (
          <CheckCircleIconSolid
            className="h-7 w-7 text-gray-400 cursor-pointer"
            onClick={key ? handleChecked : () => { }}
          />
        )}
      </div>
    </>
  );
}

export default CheckedCard;
