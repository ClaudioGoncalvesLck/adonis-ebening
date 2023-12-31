import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string | null

  @column()
  public nick_name: string | null

  @column()
  public discord_token: object | null

  @column()
  public discord_id: string | null

  @column()
  public discord_avatar_url: string | null
}
