/*
    Assignment 05
    Name: Rushabh Shah
*/

$(document).ready(function () {

    class ContentItem {

        constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category) {
            if (id === this.id) {
                if (name !== null) this.name = name;
                if (description !== null) this.description = description;
                if (category !== null) this.category = category;
            }
        }
      
        toString() {
            return `<div class="content-item-wrapper" id="contentitem-${this.id}">
                        <h2>${this.name}</h2>
                        <p>${this.description}</p>
                        <div>${this.category}</div>
                    </div>`;
        }
    }
      
    //Created an array of ContentItems
    const contentItems = [
        new ContentItem(0, "The Great Gatsby", "A novel about the decline of the American Dream", "Fiction"),
        new ContentItem(1, "Hamilton", "A musical about the life of Alexander Hamilton", "Musical"),
        new ContentItem(2, "Black Mirror", "A science fiction anthology series", "TV Show"),
        new ContentItem(3, "The Witcher 3: Wild Hunt", "An action role-playing game", "Video Game"),
        new ContentItem(4, "TED Talks", "A series of educational talks", "Educational")
    ];
      
    //To display the content item list
    const $contentItemList = $("#content-item-list");
    $contentItemList.empty();

    for (const contentItem of contentItems) {

        const $contentItemWrapper = $(contentItem.toString());
      
        //Added some CSS styles
        $contentItemWrapper.css({ "border": "2px dotted black", "width": "70%", "padding": "10px",
                                "margin": "auto", "margin-top": "20px", "margin-bottom": "20px"});

        $contentItemList.append($contentItemWrapper);
    }
      
    //To display the theme name
    const $theme = $("#theme");
    $theme.text("Favorite Media");
      
    //Added two buttons to update
    const $updateSuccessBtn = $("<button>").text("Update ContentItem (Successful!)");
    const $updateFailureBtn = $("<button>").text("Update ContentItem (Unsuccessful!)");
      
    //Added click event handlers to the buttons

    $updateSuccessBtn.on("click", function() {
        contentItems[0].updateContentItem(0, "The Great Gatsby (Updated!)", null, null);
        const $contentItemWrapper = $(contentItems[0].toString());
        $contentItemList.find(`#contentitem-${contentItems[0].id}`).replaceWith($contentItemWrapper);
    });
      
    $updateFailureBtn.on("click", function() {
      contentItems[1].updateContentItem(0, "Black Mirror(Updated!)", null, null);
      const $contentItemWrapper = $(contentItems[1].toString());
      $contentItemList.find(`#contentitem-${contentItems[1].id}`).replaceWith($contentItemWrapper);
    });
      
    //Added buttons on the page
    $("body").append($updateSuccessBtn);
    $("body").append($updateFailureBtn);
});