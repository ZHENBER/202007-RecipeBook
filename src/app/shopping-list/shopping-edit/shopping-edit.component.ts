import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ShoppingService } from "../../service/shopping.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  // using @ViewChild to add ingredient
  @ViewChild("nameInput", { static: true }) nameInput: ElementRef; //ViewChild is a Property decorator that configures a view query. ('nameInput', { static: true })means a variable of HTML element(<input type="text" id="name" class="form-control" #nameInput>),and static - True to resolve query results before change detection runs, false to resolve after change detection. Defaults to false. other nameInput is a variable used in TS. ElementRef means its data type.
  @ViewChild("amountInput", { static: true }) amountInput: ElementRef;

  // using Two-way Binding to add ingredient
  name;
  amount;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {}

  onAdd() {
    // const ingredient = {name: this.nameInput.nativeElement.value,amount: parseInt(this.amountInput.nativeElement.value)};
    const ingredient = {
      name: this.name,
      amount: this.amount
    };
    this.shoppingService.addIngredient(ingredient);
  }
}
