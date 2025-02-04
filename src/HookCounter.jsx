
import { use } from "react";
import { useEffect, useState } from "react"
import classes from "./counter.module.scss"

export function HookCounter( {initialValue = 0} ){
   

import { useState, useCallback } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
// nel tutorial ha rimosso questi effetti per metterli in un altro componente chiamato Clock
// useEffect(()=>{
//     console.log("i have been mounted");
// },[])

     useEffect( ()=> {
     console.log("The value of the counter is ${counter}");
    return ()=> {
     console.log("the value of the counter was ${counter}")}
    }, [counter, initialValue] )


    function handleCounterIncrement() {
        // setCounter(counter + 1)
        //oppure posso scriverlo così
         setCounter((c)=> c+1)
    }
    handleCounterIncrement()
    
    function handleCounterDecrement(){
        setCounter((c)=> c-1)
    }
    handleCounterDecrement()


    function handleCounteReset(){
        setCounter(initialValue)
    }
   
    handleCounterReset()


    const [counter, setCounter] = useState(0)
    return (
        <div>
            <p className={counter %2 === 0 } >i have counted to {counter}</p>
            <button className={classes.button} onClick={handleCounterIncrement}>Increment</button>
            <button className={classes.button} onClick={handleCounterDecrement}  >Decrement</button>
            <button className={classes.button} onClick= {handleCounteReset} >Reset</button>
        </div>
    )
} 

import { useState, useEffect } from "react";

// useCounter Hook
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// useForm Hook
export function useForm(initialValues = { username: "", password: "" }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
}

// useGithubUser Hook
export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUser();
    }
  }, [username]);

  return { user, error, loading, fetchUser };
}

// useCurrentLocation Hook
export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = () => {
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, loading, error, getLocation };
}

HookCounter()