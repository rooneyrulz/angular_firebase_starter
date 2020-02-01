import { Component, OnInit } from "@angular/core";

// IMPORT MODELS
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {}

  ngOnInit() {
    this.todos = [
      { id: "382932", title: "todo one", body: "it is first todo item" },
      { id: "32302930", title: "todo two", body: "it is second todo item" },
      { id: "4738473", title: "todo three", body: "it is third todo item" },
      { id: "463746347", title: "todo four", body: "it is fourth todo item" }
    ];
  }
}
