# Mailing micoservice

## Routes 

> /mail/send

## Actions

> **POST**

## Expected paramters format

> params to be sent

```Javascript
    {
      'from': 'senders email'
      'to': 'recepient email'
      'subject': 'email subject'
      'html': 'html formated message body'
    }
```

## Services hooked up to mailing service

> MVC-Webform (Service Calls)