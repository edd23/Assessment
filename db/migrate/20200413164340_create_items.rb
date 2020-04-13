class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :image
      t.text :description
      t.integer :likes

      t.timestamps
    end
  end
end
