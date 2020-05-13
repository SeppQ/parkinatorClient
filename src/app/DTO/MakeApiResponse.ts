export class MakeApiResponse {
    Count: number;
    Message: string;
    SearchCriteria: string;
    Results: string;
    public constructor(Count: number ,Message: string,SearchCriteria: string,Results: string)
        {
            
            this.Count = Count;
            this.Message = Message;
            this.SearchCriteria = SearchCriteria;
            this.Results = Results;

        }

    
}
