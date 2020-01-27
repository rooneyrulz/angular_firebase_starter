import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// COMPONENTS
import { HomeComponent } from "./components/home/home.component";
import { TodoComponent } from "./components/todo/todo.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { AboutComponent } from "./components/about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "todos",
    component: TodoComponent,
    pathMatch: "full"
  },
  {
    path: "todo/:id",
    component: TodoItemComponent,
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [
  HomeComponent,
  AboutComponent,
  TodoComponent,
  TodoItemComponent
];
