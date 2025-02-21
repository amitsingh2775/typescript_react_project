import { Delete } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoProps = {
    items: { id: string; text: string }[];
    deleteTodo:(id:string)=>void
  };
  
  const TodoList: React.FC<TodoProps> = ({ items,deleteTodo }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3"> 
        {items.length === 0 ? (
          <p className="text-gray-500">No todos yet. Add one!</p>
        ) : (
          items.map((item) => (
            <Card key={item.id} className="p-3">
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <CardTitle>{item.text}</CardTitle>
                <Button onClick={()=>deleteTodo(item.id)} className="h-6 w-6" size="icon">
                  <Delete />
                </Button>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    );
  };
  
  
  export default TodoList;
  