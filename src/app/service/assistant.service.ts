import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import{Iassistant} from'../shared/iassistant'
@Injectable()
export class AssistantService {
  Url=""
  constructor( private _http:HttpClient ) { }

  GetAllAssistant()
  {
    this._http.get(this.Url);
  }


  GetAssistantById()
  {
    this._http.get(this.Url);

  }
  Postdata(_assistant:Iassistant)
  {
    this._http.post("",_assistant);
    
  }

  UpdateData(_assistant:Iassistant)
  {
    this._http.put("",_assistant);
    
  }
}
