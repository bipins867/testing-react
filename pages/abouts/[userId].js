import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default () => {
  const router = useRouter();
  const userId = router.query.userId;
  
  
  const data=details.filter(item=>item.id==userId)
  
  let result=null;
  if(data.length>0){
    
    result=data[0];
  }
  
  if(result===null){
    
    return <><h1>Developer  don't exists {userId}</h1></>
  }
  

  return (
    <>
      <h1>HELLO Mr {result.name} </h1><br/>
      <h2>Role :- {result.role}</h2>
    </>
  );
};
