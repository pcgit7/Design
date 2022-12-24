import React from 'react'
import classes from './right.module.css'
import ImgCont from './ImgCont'

const Right = () => {
  return (
    <div className={classes.main}>
        
      <ImgCont/>
      <div className={classes.base}>
      </div>

      <div className={classes.box1}>
        <img src='https://s3-alpha-sig.figma.com/img/0402/b9b0/1d41c03a2dd4ef52512ffa9e833c7bc7?Expires=1672617600&Signature=nckPVMhcovMTF-qpPlnI3f31wJypTYJwPc7tZDBWcjNsjS1tnZloH7bJbsz0RLsIKIQo~K3c6~9TWK8eI2mtaksralb6OlSgzl38BbUhMcGdPzRlMkkDERRB2TyodBe5ULlj8Glymvg16oso9HYyaTnz5j3YwdgEDyOfYyfq64ZXXjiRUDCvyp68qAVnjUBV7rsBgHjiHm6MF9r7h81fEimxQFNxoL6PCjTNLj4pdylxOAuQvKG2yKniXl8Yu6T7xm2h4fSNzkrXq5ah2vBKFHbYOyh0k~LGNoQhunbqcNT48EmH17pngIgqGUWkrTQP1Y-tLbyGrT68ZTxqrQI-6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
        <div className={classes.content1}>
            <h4>Jane Cooper</h4>
            <p>I Loved the Italian course!</p>
        </div>
      </div>

      <div className={classes.box2}>
        <h4>10+ Courses</h4>
        <p>Multiple Categories</p>
      </div>

      <div className={classes.box3}>
        <div className={classes.avatar}>
            <img style = {{left : "4%", objectPosition : "center 40%", }} src='https://s3-alpha-sig.figma.com/img/15fd/24d9/16766950fe4c7fe650053816f76e279f?Expires=1672617600&Signature=Hstor4y4ffyFqmbrg1mV5y06VRbZj8lxLUD~wViQBp7IrHL5RsxT71HZ0njKL2eMhVKxvBRUsZOq5IEJR-MVTmyE7O8RYq9SCHZ1svyXI2q2F7tkEHbJJSAYQ9r0QOY4NoafTYNLvo2-JLQfrJvjAyxVVrEZBeHxCr70LisG~K5fqI7xMYcmbXltcReni0fo8F2vuiJQJ~EZO3fbNNhdPCXPvRMtNquiP~h0JB4bBFv3Ybp4wYcPs-wbzoTTsxhaFxU4cQbIu7JLMF-~3dFzXdyPv1cTWs25eteXuQpQvlnrccakUvxpm27wOZMQtNmA8odwRRhwQpo5eCUpK1OQRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
            <img style = {{left : "20%", objectPosition : "center 30%" }} src='https://s3-alpha-sig.figma.com/img/61b5/e0a5/a75d2e0f79ffe967a9fbc80e55dbed64?Expires=1672617600&Signature=BiLcfybMiocPNlxX8GWiYQFgqRG686W~Qg6cSfFsgpisb~tbUzXIAOsKfM9YALTGJqxZjYmSShDINWy3Y9ehiKsYbh~R40bxFbItzmdW8FJvG8OpUqXmrlgUavFV9TLDk60zhYT1cKjZJ25SQdLy0D8T2UzZuv7-PTw8ZPpyo3PYAx8~cbum-gf57ssdGGcrCdaB7qRBAqporOn5lZcF2VjHCa63FG7SohLwyw71ljKeJ~3Ax9AsMrl8UUzbk860~bzjue4x9QYike7dd2AckbGmFVcvTj7shVNiTtE01jSZnSBusIAiVt0Jfk6QtAdIUpATTnoX54aT3VVXh5nSDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
            <img style = {{left : "34%", objectPosition : "center 30%" }} src='https://s3-alpha-sig.figma.com/img/0812/91b2/80d8f55a1b6f64c9664b77527597157f?Expires=1672617600&Signature=EKpuBXhLEk29aXx1-JzqCUqN2kbL4er9kU5KFXzVPsqdpsEqn6IdMhyFRHtF1vlsM6bVJLMq34CrgpjkaxKWgNbDNXj4QxDAcZZkqL9a~fFzVTutSmSXTZsrV7vWdckesA3-H47wrRqwGDTYFWYgKZ8-tGIbtxPYhDqtW41EmlDgDVvuASF6QZ53LseAc3eqW2ATlkZBtlkkl3m~nvAzg831C3fO02Wb2ctja4VWQPYRKVy9HHBLvl4xFTllv1EwNjrzrLR7rFZ9DpdYehF0HroibMkTfp39Yoia3qZyW19ijSUxgVAcKd8NJ4W8agSPte1okjNfov7FwLHRqHOS1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
            <img style = {{left : "52%" , objectPosition : "center 40%"}} src='https://s3-alpha-sig.figma.com/img/acab/72fc/5212480e0d3f80f2d5081e78339bfc21?Expires=1672617600&Signature=gSq4Ko4D-Q~up8dGcatN8eRzXPKj5E1Cw6MOd9k792nKjl~NH452-KzmsDh1DuotRdhglXSlkrhFeLxfxrfzWs-VTUT2R6EswwGq8sdKYL4i~-W1mhnVR~e03GxBcUS9sWmgvbSlCimI0bpjN6dNQyzkPvkhQD44yZm4sAFV~i4txJqM5sFvvgbkJQtaikewqZunnsb03LQCs~UaqacWwfPCAAC45S7WBZDAxi8aGjNUA7ZOIDWaGgZrxYlqAufKZBe7b2QwIH5NAVC4PLHeSbETKBAvRzfCiDobTI95b3j3Scb3BIF1qAOB4hDKMgRk0xUwx1er8yYi3XHoQDoLTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
            <div className={classes.circle}>+50</div>
        </div>

        <p className={classes.content3}>Dedicated Students per day :</p>
      </div>
    </div>
  )
}

export default Right
