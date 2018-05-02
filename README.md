

# EMOJIS IN ANGULAR AND IONIC
## To show emjois in angular or ionic you can try this:


######  - Create a service to call a json with all emojis, you can finde the emojis in this page: 
https://raw.githubusercontent.com/dzfweb/nativescript-emoji/master/emoji.database.ts
[lync emojis data](https://raw.githubusercontent.com/dzfweb/nativescript-emoji/master/emoji.database.ts)


```javascript
/* GET JSON */
  emojis(): any {
    return this.http.get('assets/data/emoji.json')
      .map((res: any) => res.json());
  }
```

###### - Call the service:

```javascript
 /* CALL SERVICE TO GET EMOJIS */
  emoticonos() {
    this.confData.emojis().subscribe((data: any) => {
      console.log("EMOJIS", data);
      this.emojis = data;
    });
  }
```

###### - Print the emojis:

```html
  <ion-item-group *ngFor="let emoji of emojis">
    {{emoji.unicode}}
  </ion-item-group>
```

