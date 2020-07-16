class CreateMessasges < ActiveRecord::Migration[6.0]
  def change
    create_table :messasges do |t|
      t.references :user, foreign_key: true
      t.references :group, foreign_key: true
      t.string :message
      t.string :image
      t.timestamps
    end
  end
end
