import { Component, OnInit } from "@angular/core";
import { NumberService } from "./numberService";

interface INumber {
    Id: number,
    Number: number
};

@Component({
    templateUrl: 'Angular/homeComponent.html'
})

export class HomeComponent implements OnInit {

    constructor(private _numberService: NumberService) { }

    ngOnInit(): void {
        this.LoadNumbers();
    }

    Numbers: INumber[];
    msg: string;

    LoadNumbers(): void {
        this._numberService.get('api/values/Get')
            .subscribe(numbers => { this.Numbers = numbers; },
            error => this.msg = <any>error);
    }

    add(): void {
        let data = {Number: 5};

        this._numberService.postModel('api/values/PostModel/', data).subscribe(
        data => {
            if (data == 1)
            {
                this.LoadNumbers();
            }
        },
        error => {
            this.msg = error;
        }
        );
    }

    addConstant(): void {
        let data = 5;
        console.log(data);

        this._numberService.post('api/values/Post', data).subscribe(
        data => {
            if (data == 1)
            {
                this.LoadNumbers();
            }
        },
        error => {
            this.msg = error;
        }
        );
    }

    delete(): void {

        let ddata = {};

        this._numberService.delete('api/values/Delete').subscribe(
            data => {
                if (data == 1)
                {
                    this.LoadNumbers();
                }
            },
            error => {
                this.msg = error;
            }
        );
    }

    deleteNumber(id: number) {

    }
}